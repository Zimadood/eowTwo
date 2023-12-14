Gulp Project completed.
My Gulp is constructed to minify css and have a separate
task for expanded css.

index.html file is set to opperate from the scss folder
The GulpFile is outside of the src and other folders.

NOTE 'del npm' is downgraded to 6.1.1

& imagemin.js is version 7.1.0
*********************************************
Tuesday 14th november.

Disaster recovery major distraction (Acccountant telephoned and navbar links styling was lost.
I should have paid more attention to what I was doing and packed up by then.
moral of story: "Effective backups works no matter how small the the projects you do change or are updated."
***********************************************

Sunday 3rd December 2023 Version 48

Slider Theme grid has been understood and nearly/ almost completed all bar media queries and breakpoints.

***********************************************

NOTES: 4th December 2023
eileens of wendover udemy account has the most useful css/sass course.

*Lecture: 56. Let's Use the Power of Sass Mixins to Write Media Queries
re-watch towards the end is the beakpoint/mixin solution you are looking for.

*Lecture: 121. Writing Media Queries - Part 1 (most applicable to eowTwo Project),
I believe not all the queries in this lecture should be employed for eowTwo but 
adapt them to the slide theme and navbar as you see fit.

*Sidebar Navigation needs a good look at when it conmes to shrinking the page.
It's not really very good on smaller screens.

*************************************************
Media Queries to consider
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}

*************************************************
Saturfay 8th December 2023.

Managed to with success, after being scuppered by a typo,
to work the media queries via _mixins.scss file.
Have yet to re-study Jonas's sidebar change, I seem to remeber that didn'tablets
involve too much code but will have to see how it works with my megre mods.

*************************************************
Sunday 9th December 2023 NOTES.
LAP-13 Size = 1280px wide by 720px height.
iPad Air 3 10inch Tablet Size = 1112px wide by 834px height.

Learning the order of media queries is essential.
Learn from Jonas 'Natours Project' Lectures 56/57.

*************************************************
Monday 11th December 2023.

mixins are working though I do expect some gotchas further on.
I have included max-widths to each mixin 
in the hopes of preventing clashes of media query order.
I'll soon find out if I'm being to big for my own good.

MIXINS used in headerLeft file theme gallery button...
@include respond(phone-port){
  background-color: #41b825;
}
@include respond(phone-lan){
  background-color: #f31606;
}
@include respond(tab-port){
  background-color: #277cc5;
}
@include respond(tab-lan){
  background-color: #f57b18;
}
@include respond(laptop){
  background-color: #fff937;
}
@include respond(desk){
  background-color: #277cc5;
}
@include respond(desk-lg){
  background-color: #41b825;
}

******
2 I have done what I didn't want to do and that is use the Nexter 
Header grid layout for my slide, .slide-theme position.
Had to adapt it slightly.
An extra min-content row was applied and the slide logo has a position 
of 'Absolute' instead of 'relative.


*************************************************

55-Version: Tuesday 12th December 2023

I think I have the media queries covered, There is certainly a lot
a pro will say I've created too much, they are not necessary but I am 
learning.
I get very confused trying to invisage them, Thank heavens for media queries 
horizontal bar code in the chrome dev tools.

I will reduce them but not just at the moment.

*************************************************