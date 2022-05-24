## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

Use this template to get started.

Create a supbase project with a `workshops` table and a `participants` table. Add a few rows to your workshops table in the supabase.io dashboard.

For the workshops and the participants use `(role() = 'authenticated'::text)` for all CRUD actions row level security.

Learning Objectives
Create foreign key relationships in Supabase
Use the Supabase JS client to fetch related data in Supabase
Use the Supabase JS client to create data with foreign-key relationships in Supabase
Description
We will be creating a Workshop Organizer. This app allows you to add participants to workshops.

Acceptance Criteria
Users should be able to see a list of workshops with participants on `/workshops`
Clicking on a participant should delete it from supabase and rerender the list of workshops
The `/create` page should have a prefilled dropdown menu with the list of workshops from supabase
Submitting the form on the `/create` page should create a new participant in the workshop and redirect the user back to the `/workshops` page
Rubric
Task	Points
Main branch deployed to Netlify	1
Open PR from `dev` branch with Netlify deploy preview	1
Supabase tables properly setup (submit a screenshot with your submission)	2
User sees a list of workshops with participants on `/workshops`	3
User sees a DYNAMIC dropdown of workshops on `/create`	3
User can add a partipant to a workshop	2
User can remove a participant from a workshop	2
ASYNC: `getWorkshops()` : get all workshops with their participants in supabase.	2
ASYNC: `createParticipant(participant)` : create participant in supabase and attach it to a workshop	2
ASYNC: `deleteParticipant(id)` : delete a participant in supabase	2

TO DO 

✅ set up tables in supabase workshops and participants
    ✅ enable rls 
    ✅ add authentification policy
    ✅ add foreign keys for uuid and workshop id
    ✅ create client in fetch utils 
    ✅ add script tags to html heads 
✅ setup workshops folder with index, and js files
    ✅ connect appropriate networks
    ✅  *VALIDATE redirectIfLoggedIn()
    ✅ set up workshops container 
    ✅ set up add a participant button
    ✅ assign function getWorkshops() in fetch
    ✅ call getWorkshops in workshops on load 
    ✅ * validate in console that you grabbed all the workshop data

✅ write renderworkShop() and TDD
✅ write displayWorkshops() and call renderWorkshop within
✅ add event listener to participant li to listen for clicks and call deleteParticipants inside
✅ *validate workshops render to page visually

✅ set up create folder with index, and js files
✅ connect appropriate networks
✅ * validate authorization and redirect
✅ setup form
✅ add styling
✅ write onLoad() to load workshops to the selector dropdown
✅ write participant form event listener for submit to add data to supabase
✅ write createParticipant()
✅ validate supabse updates and rendering to page
✅ write deleteParticipant() 
-add event listener to each participant to delete them off page 
*confirm deletion from supabase and page


