# Maths-inCoding-Website-Server
This is the prototype for a website for learning maths through coding computer games. It connects JQuery Player, through JQuery, to HTML/CSS and then to an Express programmed NodeJS server, which itself uses Mongoose to connect to MongoDB.



![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/gif_folder/front%20page%20maths%20inCoding.gif)



The website presents the six areas of the maths curriculum. Maths teachers/tutors/teaching assistants would ask their pupils to connect to which area they need to learn and select a video teaching them how to code a game in Scratch/Roblox/the Unreal Engine/or the Visual Studio Community Command Line. The video will then play and stop at predetermined times to ask questions on the mathematics involved in coding this game (questions which are relevant to the chosen area of the curriculum). If the student understands the maths, it's back to the video on coding the game. If not, a video explaining the maths will run and, at its end, the student is asked the same questions. After re-answering, they return to the video on coding the game (paused at the time the maths questions interrupted it.). All of the scores from the maths questions are posted to MongoDB. 

Here's a video on the site in action:


![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/gif_folder/run%20through%20of%20facility.gif)


In the footer are links to how to set up the different platforms used in the videos. There is also a feedback form in case any content creator wants to get in touch. 


![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/gif_folder/feedback%20form.gif)


Again, the details are uploaded to MongoDB

![](https://github.com/tobyStone/Maths-inCoding-Website-Server/blob/main/gif_folder/feedback%20to%20mongodb.gif)

This prototype is designed to see if the structure and the general design of the site make sense.

The next iteration will have videos in more of the choices, with maths questions in each, and these questions will be at more relevant stages in the videos. Khan Academy will also be added as a platform on which the students can code. This, along with Scratch, will be provided with the majority of the videos as a risk for the site is that teachers won't know how to support the students who are coding. Scratch and Khan provide great entry level access for both adults and children. Roblox is probably going to be the highest level specification, for three reasons. 

1) the game is live and so has safeguarding issues (and is often barred by school firewall providers) so will have so be sand-boxed and used as a tool to teach online safety
2) the game is live and so Roblox's own secure setup means the coding is split into three areas and so harder to code.
3) few teachers know how to code Roblox Lua and so support in lesson will be difficult.

A remedy to the last two of these issues (as well as pupils coding command line Python and C++) will be to provide courses for teachers to support this platform. This could well be a good way to expand the business into inset days. Supporting children in coding is only possible if schools have staff who can do the same. However, in summary, the site will use Roblox and the Unreal Engine as an exciting 'end-game' for children to get into it, but will be mainly positioned toward videos on Scratch, Khan, and command-line coding.

Once all this is set up, a hosting service will be found for the site and it will 'go live' to be tested one-to-one via an online tutoring service.

After this, any changes in design will be made, along with setting up a 'sign up/sign in' pair of links in the header of the site. This will allow a teacher to sign in as a 'superuser' and track the scores of their students. This will enable teachers/tutors to see if anybody needs extra support, or which pupils may be surreptitiously skipping the questions.

After this beta testing, there (no doubt) will be further changes made to the design. Feel free to share any you can think of before all of this process continues (it may well save me a lot of time).

Thanks,


Toby


update 23/09/22... following sharing this with an web designer/IT professional, I have some development points to work on.

1) a more complete design including navigation around the site, legal notices, About, etc... This would include turning the pop-up windows into a full replacement of the page.
2) toward this redesign, and as there would be several full pages, a templating download (Bootstrap, Moustache..?) to minimise the code and maintain a 'look'.
3) a deployment pipeline using soemthing like https://github.com/github/deploy-nodejs
4) bug maintence once deployed via, potentially, https://sentry.io   


