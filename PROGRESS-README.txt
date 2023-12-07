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