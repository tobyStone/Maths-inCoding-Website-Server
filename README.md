# Maths-inCoding-Website-Server
This is the prototype for a website for learning maths through coding computer games. It connects JQuery Player, through JQuery, to HTML/CSS and then to an Express programmed NodeJS server, which itself uses Mongoose to connect to MongoDB.



![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/front%20page%20maths%20inCoding.gif)



The website presents the six areas of the maths curriculum. Maths teachers/tutors/teaching assistants would ask their pupils to connect to which area they need to learn and select a video teaching them how to code a game in Scratch/Roblox/the Unreal Engine/or the Visual Studio Community Command Line. The video will then play and stop at predetermined times to ask questions on the mathematics involved in coding this game (questions which are relevant to the chosen area of the curriculum). If the student understands the maths, it's back to the video on coding the game. If not, a video explaining the maths will run and, at its end, the student is asked the same questions. After re-answering, they return to the video on coding the game. All of the scores from the maths questions are posted to MongoDB. 

Here's a video on the site in action.


![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/run%20through%20of%20facility.gif)


In the footer are links to how to set up the different platforms used in the videos. There is also a feedback form in case any content creator wants to get in touch. 


![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/feedback%20form.gif)


Again, the details are uploaded to MongoDB

![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/feedback%20to%20mongodb.gif)

This prototype is designed to see if the structure and the general design of the site make sense.

The next iteration will have videos in more of the choices, with maths questions in each, and these questions will be at more relevant stages in the videos. The site will then be tested on classes.

After this, any changes in design will be made, along with setting up a 'sign up/sign in' pair of links in the header of the site. This will allow a teacher to sign in as a 'superuser' and track the scores of their students. This will enable teachers/tutors to see if anybody needs extra support, or which pupils may be surreptitiously skipping the questions.

After this beta testing, there (no doubt) will be further changes made to the design. Feel free to share any you can think of before all of this process continues (it may well save me a lot of time).
Thanks,


Toby

ps, Yes, the code needs a huge amount of editing. As a published author (I had to get that in somewhere, didn't I? Hic Dragones are my publisher, since you asked) I know the value of leaving a first draft for a couple of months and coming back to it, fresh. Github just seemed the best place to store it, in the meantime.
This codebase needs - in the least- editing for:
1) style
2) deletion of unnecessary code
3) proper annotation
4) accessibility
5) security

In the two months, I'm sure I'll think of a lot more...
