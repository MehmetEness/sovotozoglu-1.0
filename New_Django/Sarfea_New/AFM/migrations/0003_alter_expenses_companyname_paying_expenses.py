# Generated by Django 4.2.7 on 2023-11-15 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AFM', '0002_alter_expenses_date_expenses_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expenses',
            name='CompanyName_Paying_Expenses',
            field=models.CharField(default='Genel Gider', max_length=63),
        ),
    ]