note: discontinued project, i fucking hate reactjs

# Little Backstory
I've been exploring different frameworks and decided to move this project in a new direction.  While this template utilizes React hooks, I'm venturing into fresh territory.

That being said, I'm excited to share this open-source template!  Feel free to use or modify it for any of your projects, commercial or personal. I'd love to see what you create!

Project Setup

This guide gets you started with the project, covering both backend setup and frontend deployment.

Prerequisites:

    Python 3.x (https://www.python.org/downloads/)
    pip (usually included with Python installation)
    Node.js and npm (https://nodejs.org/en)

Backend Setup

    Create a virtual environment:

    python -m venv env

    Activate the virtual environment:

        Windows:

        ./env/Scripts/Activate.ps1

        Other Systems (macOS/Linux):

        source env/bin/activate

    Install dependencies:

    pip install -r requirements.txt

    Start the development server:

    uvicorn app:app --reload --root-path="/api"

    This command starts the Uvicorn development server for your backend application.

    (Optional) Configure Nginx for reverse proxy:

    Nginx configuration is outside the scope of this guide, but it's necessary if you plan to use it as a reverse proxy for your application.

Frontend Setup

    Build the frontend:

    npm run build

    This command builds your frontend application and typically creates a dist folder containing the optimized assets.

    Deploy the frontend assets:

    Copy the contents of the dist folder to your web server's document root. The default location is usually /var/www/html/.

That's it! Your application should now be running.

Additional Notes:

    Replace app:app with the actual entry point of your backend application if it differs.
    Adjust Nginx configuration based on your specific server setup.


