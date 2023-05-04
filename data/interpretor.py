import turtle as tur
import turtle


#initalize turtle
turtle.speed("fastest")
tur.pensize(1)
tur.hideturtle()
tur.colormode(255)    
#initial parameters
xstart = -400
xincrement=3
xstop= 160*xincrement
yincrement = 200

#all the graphed samples
samples=[]

#colors based on their wavelenght
colors={
    510:"green",
    610:(255,155,0),
    710:(237,0,0),
    810:(90,0,0)
}

COLOR = (255, 0, 0)
TARGET = (155,200,0)



def load_data(path):
    data=open(path)
    data = data.read()

    data=data.split("\n")
    data2=[]
    for dato in data:
        data2.append(dato.strip().split("\t"))

    data2=data2[1:]
    data2=data2[:-1]
    return data2

def draw_axies(xstart, yincrement,color):
    tur.pensize(3)
    tur.pencolor(color)

    tur.penup()
    tur.goto(xstart-10,-3)
    tur.pendown()
    tur.goto(xstop,-3)
    #x popisek
    tur.penup()
    tur.goto((xstop//2)+xstart,-75)
    tur.write("Wavelength [nm]",False)


    tur.penup()
    tur.goto(xstart-3,0)
    tur.pendown()
    tur.goto(xstart-3,yincrement)
    #y popisek
    tur.penup()
    tur.goto(xstart-40,yincrement//2)
    tur.write("Intensity \n [normalized]",False,"center")


def square(l,w,color):
    tur.fillcolor(color)
    tur.begin_fill()
    for _ in range(4):
        if _% 2 == 0:
            tur.forward(l) 
            tur.left(90)
        else:
            tur.forward(w) 
            tur.left(90) 
    tur.end_fill()


def popisky():
    tur.penup()

    for i in range(4):
        pos = [xstart+i/1.0099*99*xincrement,-20]
        tur.goto(pos)
        tur.write(f'{(510+i*100)}nm')
        tur.goto(pos[0],pos[1]-30)
        square(50,20,colors[510+i*100])


    #heading
    tur.penup()
    tur.goto((xstop//2)+xstart,250)
    tur.write("This is very susy graph")

    #legend
    position=[300,175]
    tur.goto(position)
    for dato in samples:
        tur.fillcolor(dato[1])
        tur.pencolor(dato[1])
        tur.begin_fill()
        tur.circle(5)
        tur.end_fill()
        tur.pencolor("black")
        print(position,dato)
        tur.goto(position[0]+10,position[1])
        tur.write(dato[0])
        position[1]-=30
        tur.goto(position)

def draw_data(data:list,color:str,xstart:int,line:bool=False):
    tur.pensize(1.5)

    tur.penup()
    tur.goto(xstart,0)


    if line: tur.pendown()
    else: tur.penup()
    tur.pencolor(color)
    tur.fillcolor(color)

    xpos=xstart
    for dato in data:
        tur.goto(xpos,int(float(dato[1])*yincrement))
        tur.begin_fill()
        tur.circle(2)
        tur.end_fill()
        xpos+=xincrement
    tur.penup()

def file_to_graph(path,color,line,name):
    samples.append((name,color))
    data = load_data(path)
    draw_data(data,color,xstart,line)


file_to_graph("NaYS2_Eu_Ex455.txt","blue",True,"NaYS2")
file_to_graph("TS172_K0_89NaYS2_Eu_Ex455.txt","purple",True,"K89:NaYS2")
file_to_graph("TS132_KYS2_Eu_Ex455.txt","red",True,"KYS2")
file_to_graph("TS169_K0_91NaYS2_Eu_Ex455.txt","brown",True,"K91:NaYS2")
file_to_graph("TS173_K0_83NaYS2_Eu_Ex455.TXT","black",True,"K83:NaYS2")
draw_axies(xstart, yincrement,"black")
popisky()

tur.done()

