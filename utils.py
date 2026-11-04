# utils.py

import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def log_message(message: str, level: str = 'INFO'):
    """Logs a message with a specified level."""
    if level.upper() == 'ERROR':
        logging.error(message)
    elif level.upper() == 'WARNING':
        logging.warning(message)
    else:
        logging.info(message)

def load_config():
    """Loads configuration settings from config.py."""
    # In a real application, this would import and return settings
    from config import APP_NAME, VERSION
    log_message(f"Configuration loaded for {APP_NAME} v{VERSION}")
    return {"app_name": APP_NAME, "version": VERSION}

def validate_data(data: dict) -> bool:
    """Placeholder function for data validation."""
    if not data or not isinstance(data, dict):
        log_message("Validation failed: Data is empty or not a dictionary.", 'WARNING')
        return False
    # Add specific validation logic here later
    log_message("Data validation passed successfully.", 'INFO')
    return True
