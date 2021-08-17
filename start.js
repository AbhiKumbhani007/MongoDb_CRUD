const express = require('express')
const app = express();
const path = require('path');
const methodoverride = require('method-override');
const {v4 :uuid} = require('uuid');

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(methodoverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

let comments = [
    {   id: uuid(),
        username: "Andrew",
        comment: "Hellow"
    },
    {
        id: uuid(),
        username: "AK",
        comment: "Nice to meet you"
    },
    {   id: uuid(),
        username: "Moris",
        comment: "Have a good day"
    },
    {
        id: uuid(),
        username: "Methew",
        comment: "That's Nice"
        
    }
    
]
app.get('/', (req, res) => {
    res.send("This is Home Page");
})

app.get('/comments', (req, res) =>{
    res.render('index', { comments });
})

app.post('/comments', (req, res) =>{ 
    const {username,comment} = req.body;
    comments.push( { username, comment, id: uuid() } );
    console.log(req.body)
    res.redirect('/comments');
})


/* app.get('/comments/new', (req, res) =>{
    res.render('new');
    
})
 */
/* app.get('/comments/:id', (req,res) => {
   const {id} = req.params;
   const comment = comments.find(c => c.id === id);
   res.render('show', {comment});
})

app.get('/comments/:id/edit', (req,res) => {
   const {id} = req.params;
   const comment = comments.find(c => c.id === id);
   res.render('edit', {comment});
})

app.patch('/comments/:id', (req,res) => {
   const {id} = req.params;
   const NewCommentText = req.body.comment;
   const FoundComment = comments.find(c => c.id === id);
   FoundComment.comment = NewCommentText;
   res.redirect('/comments');

})

app.delete('/comments/:id', (req,res) =>{
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments');
}) */

app.listen(4000, () => {
    console.log("This is Port 3000!!");
});