# main.py

from config import APP_NAME
from utils import log_message, validate_data, load_config

def main():
    """
    Main entry point for the Course Factory Education Agent application.
    """
    log_message("Application starting up...")

    # 1. Load configuration
    config = load_config()
    log_message(f"Configuration loaded: App Name={config['app_name']}, Version={config['version']}")

    # 2. Perform initial checks or setup tasks
    log_message("Running initial system checks...")
    
    # Example of using a utility function
    test_data = {"user_id": 123, "status": "active"}
    if validate_data(test_data):
        log_message("Initial data validation successful.")
    else:
        log_message("Initial data validation failed. Application might halt.")
        # In a real app, you might exit here
        # exit(1)

    log_message("Application initialization complete. Ready to serve requests.")

if __name__ == "__main__":
    main()
