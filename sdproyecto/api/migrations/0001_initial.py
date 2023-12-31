# Generated by Django 4.2.7 on 2023-11-14 00:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Motel',
            fields=[
                ('id_motel', models.BigAutoField(auto_created=True, primary_key=True, serialize=False)),
                ('name_motel', models.CharField(max_length=50)),
                ('modelo', models.CharField(max_length=500)),
                ('img_motel', models.CharField(max_length=500, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id_room', models.BigAutoField(auto_created=True, primary_key=True, serialize=False)),
                ('name_room', models.BigIntegerField()),
                ('tip_room', models.CharField(max_length=500)),
                ('jacuzzi', models.BooleanField()),
                ('img_room', models.TextField()),
                ('motel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.motel')),
            ],
        ),
    ]
