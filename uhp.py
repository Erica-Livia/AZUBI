from turtle import *
import time
from threading import Event
import turtle
win = turtle.Screen()
win.bgcolor("black")
color("white")

write("🖕🏿", align="center", font=("Comic Sans MS", 200, "bold"))
Event().wait(0.5)
clearscreen()
write("🖕🏿", align="center", font=("Comic Sans MS", 200, "bold"))
time.sleep(1)
