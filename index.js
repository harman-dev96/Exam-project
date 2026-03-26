import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;
app.get('/api/v1/all-cards/:collection',(req,res)=>{

  const{collection} = req.params;
  const filtercards = cards.filter(card=>card.collection==collection);

  res.status(200).json(filtercards)

      
});

app.post('/api/v1/all-cards/:id',(req,res)=>{

const {suit,rank,value,collection} = req.body;
const newcard = {id:cards.length +1,
  suit,
  rank,
  value,
  collection

}
cards.push(newcard);
res.status(201).json(newcard);

      
});

app.put('/api/v1/all-cards/:id', (req, res) => {

  const { id } = req.params;
  const { suit, rank, value, collection } = req.body;

  const card = cards.find(c => c.id == id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }


  card.suit = suit;
  card.rank = rank;
  card.value = value;
  card.collection = collection;

  res.status(200).json(card);
});

app.delete('/api/v1/all-cards/:id', (req, res) => {

  const { id } = req.params;

  const index = cards.findIndex(c => c.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Card not found" });
  }

  const deletedCard = cards.splice(index, 1);

  res.status(200).json({
    message: "Card deleted successfully",
    deleted: deletedCard[0]
  });
});


const cards=[
  { "id": 1, "suit": "Hearts",   "rank": "Ace",   "value": 1,  collection: "vidagd"},
  { "id": 2, "suit": "Spades",   "rank": "King",  "value": 13, collection: "royal"},
  { "id": 3, "suit": "Diamonds", "rank": "Queen", "value": 12, collection: "royal" },
  { "id": 4, "suit": "Clubs",    "rank": "Jack",  "value": 11, collection: "royal" },
  { "id": 5, "suit": "Hades",    "rank": "Black", "value": 14, collection: "vidagd"} 
]
app.listen(port,()=>{
  console.log("Server is live");
});


