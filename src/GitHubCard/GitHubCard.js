import React from "react"
import Card from "react-bootstrap/Card"
import photo from './Photo-with-dog.jpg'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem" }}>
                {/* My Github does not have a photo, so I am using another photo */}
                <Card.Img variant="top" src={photo} />

                <Card.Body>
                    <Card.Title>Photo of me with a dog</Card.Title>
                    <Card.Text>
                        I am a software dev student learning about testing.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard