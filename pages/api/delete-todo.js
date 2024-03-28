import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
    console.log('hello it is working here');
    const id=new ObjectId(req.body.id);
    if(req.method === 'POST') {
        const data = req.body;
        

        try {
            // Connect to MongoDB
            const client = await MongoClient.connect('mongodb+srv://yashoka51:WUy6Be5gRxGPWV1z@cluster0.ndzb68f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
            const db = client.db('Todo_List');

            // Update the document in the collection
            const result = await db.collection('ToDo_list_Items').deleteOne({ _id:id })

            console.log(result);

            // Close the MongoDB connection
            client.close();

            // Send a success response
            res.status(200).json({ message: 'Data updated successfully' });
        } catch (error) {
            console.error('Error updating data:', error);
            res.status(500).json({ message: 'Failed to update data' });
        }
    }
}

export default handler;
