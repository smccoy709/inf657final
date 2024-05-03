# McCoy Theater - Movie App
The McCoy Theater Movie Application will allow anyone to easily locate a movie in the database, viewing the film and its cast profile.
# API
The McCoy Theater Movie Application uses the TMDB API to pull a list of the movies, their descriptions, and their cast members from the database to display on the mobile application.  The process of using the API is to create a free account, apply for an API key, and input that into the apikey.js file within the utils folder.
# Usability
Upon first entering the application, a welcome screen will be displayed.  Click the "Explore" button to go to the main page where the API will list movies based on various categories using a snap carousel.  The categories on the Home Screen that a user can view the movies, include "Trending Movies," "Popular," "Top Rated," and "Upcoming."  A user can click any of those films to view the movie details (more about this in a bit).  In the search icon at the top right part of the app (or on the bottom tab as a link), a user can search for a movie.  For example, if a user wants to search for the movie "Titanic," a list of 20 results related to movies that have "Titanic" in the name.  If you decide to view more about the 1997 film, click that film's movie poster in the search results, and the 1997 film will show up with the runtime, the date it was released, the genre(s), and a description of the movie.  Under the film's description, it will show a list of the cast from the film and under that, a list of similar movies.  You can select a new movie from a list of similar movies or, if you want to see more about Leonardo DiCaprio, the 1997 Titanic film's male lead, click on his profile under "Cast".  It will list his name, the location of where he lives, and his date of birth.  It will have his picture and a biography about him underneath.  Lastly, it'll show a list of all the movies that Leonardo DiCaprio was in at the bottom of the page.  To go back, you would click the "X" button in the upper right portion of the screen.  If you like the movie, you can click the heart icon in the upper right part of the film's page to favorite it.  Then, you can go back by clicking the back arrow in the upper left part of the screen.

If I like the film "Halloween," I can search for "Halloween" and press the heart icon on the film screen and favorite them too.  I can go back to the main page and click the "Saved" icon on the bottom tab navigation and a list of movies that have been "Favorited" will appear.  If I want to start my list of favorite films over again, I can clear the list of Saved Movies by clicking the "Clear" button in the upper right corner of the "Saved" screen to completely wipe the Saved screen's favorite list to a blank slate.
# Account Creation
A user can click on the "Account" tab on the bottom tab navigation to sign into their account if they have one.  If they do not, they can click the "Need an account? Sign Up" link to go to a new screen to sign up for an account using Stack navigation.  A user can sign up for an account and their information is immediately stored in the Firebase database where it will log them in right away where they can see the email they are logged into and can log out of their account.  The username and password they created can be used to sign into their account anytime and log out from it.  While logged in, a user can navigate the app as normal.
# Testing
The app has been fully tested on iOS and Android devices.  The iOS device was tested through the Expo app on my iPhone 11 Pro Max.  The Android device was used through an Android Emulator.  The app works on both devices the way it is intended to.
# Video Demonstration
Below is the video demonstration of how my app works.  It demonstrates navigating the site, searching, creating an account, logging in and out of an account, clearing the favorites screen, and saving and using facial recognition for immediate login.  The video can be viewed at the following YouTube link (due to size constraints through GitHub).

https://youtu.be/bww94s-K-Xo
# Visual Walkthrough
Upon first entering the app, you'll be greeted with the opening welcome screen (see below):
![abd3dbee-5b23-4cf4-9342-094a99c9cbb0](https://github.com/smccoy709/inf657final/assets/108828888/746a36bf-0b02-4f4f-b065-e8eba11d6e88)

The next two images will display how the Home Screen would look:
![81fc4da7-1731-488f-b116-462be7969452](https://github.com/smccoy709/inf657final/assets/108828888/cb847c6d-e258-4ca3-910e-15702b3bc03c)
![289ce9f7-bafa-4285-b7e2-f5bf32dea645](https://github.com/smccoy709/inf657final/assets/108828888/ff66dec4-b654-4ef9-909e-8e5bd05771b9)

Once I go to search, I can type in "Titanic" and be greeted with 20 results, see below:
![21005591-bb4a-4f2f-be09-a1ab8825aff6](https://github.com/smccoy709/inf657final/assets/108828888/e8c98f4c-1676-4f59-b776-957f349e38ba)

On the Titanic page for the 1997 film, you can see the name of the movie (along with the movie poster), the genre of the film, the length of the film and its release date, a brief synopsis, the cast, and similar movies.  You can also click the "Heart" icon to favorite the movie.  If you click on an actor, for example Leonardo DiCaprio, it takes you to his biography page.
![1572c4cb-4cfc-45f8-8f58-784e2641c30c](https://github.com/smccoy709/inf657final/assets/108828888/8809a800-7473-4bed-a416-eea4700f26a9)
![9e886993-f7b6-4cbd-9ace-fe3e8d233231](https://github.com/smccoy709/inf657final/assets/108828888/c1044c0d-6e48-45a8-a99c-e8bcecbbc51f)
![fcd6d57d-b18f-45bf-a6f9-c046dfa4e362](https://github.com/smccoy709/inf657final/assets/108828888/3711bbf3-e3b5-4c90-94c2-580828fe1f6e)
![4b94a06d-71e5-4f37-bbaf-386a95c475a9](https://github.com/smccoy709/inf657final/assets/108828888/a8103189-479f-499b-901a-351f39aba951)
![8a9febbf-ebba-466c-a91e-902ec7cc1126](https://github.com/smccoy709/inf657final/assets/108828888/86c06b3e-600b-4021-b3cc-c6dcf7e69f59)

On the Saved tab, you can see a list of movies that a user has favorited by pressing the "Heart" icon (which was demonstrated on the "Titanic" page).  I have since favorited a few different movies to show how it appears.  Clicking the "Clear" button will remove all of the favorites from the page.
![f68cac9e-bb12-44ed-9e1e-1dc628c68fee](https://github.com/smccoy709/inf657final/assets/108828888/4ddde303-30a1-4d40-bb9e-6e954ac1b5ba)

The next two pages are the Sign Up page.  You can sign up for an account by entering your email and password.  It'll store your information in the Firebase Database and log you in.  You can click out to log out of your account.  In this example, I created an account "johndoe@gmail.com".  The password has been entered, but with iOS devices, both video and screenshots of password fields don't display.
![062eb322-3aa1-4741-af03-cb4d78ed934d](https://github.com/smccoy709/inf657final/assets/108828888/1478f88a-f202-4b1b-b34a-4fd6dbbba7f8)
![4618ab58-fe68-4a1c-95ba-569920ffcb3f](https://github.com/smccoy709/inf657final/assets/108828888/b3e424fc-ed39-474f-87eb-29be5b18a5ac)

I have signed in with my first account created on the Sign In page which was with my real email.  That email was smccoyauthor@gmail.com.  I entered my password (which won't show in the screenshot due to iOS security) and I successfully logged in.
![aba23619-4ff9-43ca-b7d9-c8624c807e8a](https://github.com/smccoy709/inf657final/assets/108828888/9740ee74-170f-4caf-be7e-5b5f072e1f75)
![bcbc6059-0df0-4321-8abb-8cccbec86e5d](https://github.com/smccoy709/inf657final/assets/108828888/8e368300-2850-4cb1-b1ba-4874cb39b2b8)
