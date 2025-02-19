import sqlite3
import csv

def sqlite_to_csv(database_name, csv_file_path):
    """
    Reads data from all tables in a SQLite database and saves it into a single CSV file.

    Args:
        database_name (str): The name of the SQLite database file (e.g., "answers.db").
        csv_file_path (str): The path to the CSV file where data will be saved (e.g., "output.csv").
    """

    try:
        # Connect to the SQLite database
        conn = sqlite3.connect(database_name)
        cursor = conn.cursor()

        # Get a list of all tables in the database
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()

        # Open the CSV file for writing
        with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
            csv_writer = csv.writer(csvfile)

            # Iterate through each table and write its data to the CSV file
            for table in tables:
                table_name = table[0]
                print(f"Exporting data from table: {table_name}")
            
                # Get the column names for the current table
                cursor.execute(f"PRAGMA table_info({table_name})")
                columns_info = cursor.fetchall()
                column_names = [col[1] for col in columns_info]  # Extract column names

                # Write the column names as the header row
                csv_writer.writerow(column_names)

                # Execute a SELECT query to fetch all rows from the table
                cursor.execute(f"SELECT * FROM {table_name}")
                rows = cursor.fetchall()

                # Write the data rows to the CSV file
                csv_writer.writerows(rows)

                csv_writer.writerow([])  # Add an empty row as a separator

        print(f"Data from all tables exported to {csv_file_path} successfully.")

    except sqlite3.Error as e:
        print(f"SQLite error: {e}")
    except Exception as e:
        print(f"Error: {e}")

    finally:
        # Close the connection
        if conn:
            conn.close()


# Example usage:
database_name = "database.db"  # Replace with your database file name
csv_file_path = "output.csv"  # Replace with your desired CSV file path
sqlite_to_csv(database_name, csv_file_path)
