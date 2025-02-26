import sqlite3
from sqlite3 import Error

def create_connection(db_file):
    """Create a database connection to the SQLite database specified by db_file"""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(f"Connected to {db_file}, SQLite version: {sqlite3.version}")
        return conn
    except Error as e:
        print(f"Error connecting to database: {e}")
    
    return conn

def print_all_tables(conn):
    """Print all table names in the database"""
    try:
        cursor = conn.cursor()
        # Query to get all table names
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()
        
        if not tables:
            print("No tables found in the database.")
            return []
        
        print("\nTables in the database:")
        table_names = []
        for i, table in enumerate(tables, 1):
            table_name = table[0]
            print(f"{i}. {table_name}")
            table_names.append(table_name)
        
        return table_names
    except Error as e:
        print(f"Error getting tables: {e}")
        return []

def print_table_data(conn, table_name):
    """Print all data from a specified table"""
    try:
        cursor = conn.cursor()
        
        # Get column names
        cursor.execute(f"PRAGMA table_info({table_name});")
        columns = cursor.fetchall()
        column_names = [column[1] for column in columns]
        
        # Get all rows
        cursor.execute(f"SELECT * FROM {table_name};")
        rows = cursor.fetchall()
        
        if not rows:
            print(f"\nTable '{table_name}' is empty.")
            return
        
        # Print column headers
        print(f"\nData in table '{table_name}':")
        header = " | ".join(column_names)
        print(header)
        print("-" * len(header))
        
        # Print rows
        for row in rows:
            print(" | ".join(str(value) for value in row))
        
        print(f"Total rows: {len(rows)}")
        
    except Error as e:
        print(f"Error printing table data: {e}")

def main():
    database = "database.db"
    
    # Create a database connection
    conn = create_connection(database)
    
    if conn is not None:
        # Print all tables
        table_names = print_all_tables(conn)
        
        if table_names:
            # Print data for each table
            for table_name in table_names:
                print_table_data(conn, table_name)
        
        # Close the connection
        conn.close()
        print("\nDatabase connection closed.")
    else:
        print("Error! Cannot create the database connection.")

if __name__ == '__main__':
    main()