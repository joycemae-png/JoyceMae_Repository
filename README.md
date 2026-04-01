# Joyce Portfolio Project

A Django-based personal portfolio website showcasing professional profile, skills, projects, education, and contact functionality.

## Project Overview

This is a dynamic portfolio website built with Django 6.0.3 that allows individuals to present their professional information online. The project includes a comprehensive admin interface for managing content and a public-facing website for visitors.

## Features

### Core Functionality
- **Profile Management**: Display personal information, bio, career interests, and social media links
- **Skills Showcase**: Categorized skills with proficiency levels and custom ordering
- **Project Portfolio**: Feature projects with descriptions, technologies, GitHub links, and live demos
- **Education History**: Academic background with degree information and timelines
- **Contact Form**: Allow visitors to send messages through the website

### Admin Features
- Full Django admin integration for content management
- Image upload support for profile photos and project images
- Custom ordering for skills and projects
- Message management system with read/unread status

## Technology Stack

- **Backend**: Django 6.0.3
- **Database**: SQLite3 (development)
- **Frontend**: Django Templates with static files (CSS, JavaScript, Images)
- **Image Handling**: Django ImageField with media upload

## Project Structure

```
joyce_project/
├── manage.py                 # Django management script
├── db.sqlite3               # SQLite database
├── joyce_project/           # Project configuration
│   ├── settings.py          # Django settings
│   ├── urls.py              # Main URL configuration
│   └── wsgi.py              # WSGI configuration
├── joyce_app/               # Main application
│   ├── models.py            # Database models
│   ├── views.py             # View logic
│   ├── urls.py              # App URL configuration
│   ├── forms.py             # Django forms
│   ├── admin.py             # Admin configuration
│   ├── templates/           # HTML templates
│   ├── static/              # Static files (CSS, JS, images)
│   └── migrations/          # Database migrations
└── static/                  # Global static files
```

## Data Models

### Profile
Personal information including name, tagline, bio, career interests, profile photo, and social media links.

### Skill
Categorized skills with proficiency levels and custom ordering. Categories include:
- Programming Languages
- Frameworks/Libraries
- Tools/Software
- Databases
- Other

### Project
Portfolio projects with descriptions, technology stacks, GitHub/live links, images, and featured status.

### Education
Academic history with school information, degrees, field of study, and attendance periods.

### ContactMessage
Visitor messages with tracking for read/unread status.

## Installation and Setup

### Prerequisites
- Python 3.8+
- Django 6.0.3

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <https://github.com/joycemae-png/JoyceMae_Repository.git>
   cd MidtermProjectJoyce/joyce_project
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv joyce
   # Windows
   joyce\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install django==6.0.3
   pip install Pillow  # For image handling
   ```

4. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (for admin access)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run development server**
   ```bash
   python manage.py runserver
   ```

   ```
   asgiref==3.11.1
   Django==6.0.3
   pillow==12.1.1
   sqlparse==0.5.5
   tzdata==2025.3

   ```

7. **Access the application**
   - Website: http://127.0.0.1:8000/
   - Admin Panel: http://127.0.0.1:8000/admin/

## Usage

### Admin Management
1. Log in to the admin panel using your superuser credentials
2. Add your profile information, skills, projects, and education
3. Upload profile photos and project images
4. Manage contact messages from visitors

### Content Management
- **Profile**: Update personal information and social links
- **Skills**: Add technical skills with proficiency levels
- **Projects**: Showcase your work with descriptions and links
- **Education**: Add your academic background
- **Messages**: View and manage visitor inquiries

## Development

### Adding New Features
1. Update models in `joyce_app/models.py`
2. Create migrations: `python manage.py makemigrations`
3. Apply migrations: `python manage.py migrate`
4. Update views and templates as needed

### Customization
- Modify templates in `joyce_app/templates/`
- Update static files in `joyce_app/static/` and `static/`
- Customize admin interface in `joyce_app/admin.py`

## Deployment Considerations

For production deployment:
1. Set `DEBUG = False` in settings.py
2. Configure `ALLOWED_HOSTS`
3. Set up a production database (PostgreSQL recommended)
4. Configure static files serving
5. Set up proper secret key management
6. Configure email backend for contact forms

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please create an issue in the repository or use the contact form on the website.

---

**Note**: This is a portfolio project designed to showcase web development skills using Django. The project includes a complete admin interface for content management and a responsive frontend for visitor interaction.
