from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Profile, Skill, Project, Education, ContactMessage
from .forms import ContactForm



def get_profile():
    return Profile.objects.first()


def home(request):
    profile = get_profile()
    featured_projects = Project.objects.filter(featured=True)[:3]
    context = {
        'profile': profile,
        'featured_projects': featured_projects,
        'active': 'home',
    }
    return render(request, 'joyce_app/home.html', context)


def about(request):
    profile = get_profile()
    context = {
        'profile': profile,
        'active': 'about',
    }
    return render(request, 'joyce_app/about.html', context)


def skills(request):
    profile = get_profile()
    all_skills = Skill.objects.all()
    skills_by_category = {}
    for skill in all_skills:
        category_label = skill.get_category_display()
        if category_label not in skills_by_category:
            skills_by_category[category_label] = []
        skills_by_category[category_label].append(skill)

    context = {
        'profile': profile,
        'skills_by_category': skills_by_category,
        'active': 'skills',
    }
    return render(request, 'joyce_app/skills.html', context)


def projects(request):
    profile = get_profile()
    all_projects = Project.objects.all()
    context = {
        'profile': profile,
        'projects': all_projects,
        'active': 'projects',
    }
    return render(request, 'joyce_app/project.html', context)


def education(request):
    profile = get_profile()
    all_education = Education.objects.all()
    context = {
        'profile': profile,
        'education_list': all_education,
        'active': 'education',
    }
    return render(request, 'joyce_app/education.html', context)


def contact(request):
    profile = get_profile()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            ContactMessage.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                subject=form.cleaned_data['subject'],
                message=form.cleaned_data['message'],
            )
            messages.success(request, 'Your message has been sent! I will get back to you soon.')
            return redirect('contact')
    else:
        form = ContactForm()

    context = {
        'profile': profile,
        'form': form,
        'active': 'contact',
    }
    return render(request, 'joyce_app/contact.html', context)