import Card from 'react-bootstrap/Card'
import face from './images/face.jpg'

const GitHubCard = () => {
    <div>
        <Card>
            <Card.Img src={face} alt="ghostface" />
            <Card.Body>
                <Card.Title>GhostFace</Card.Title>
                <Card.Text>What's your favorite scary movie?</Card.Text>
            </Card.Body>
        </Card>
    </div>
}

export default GitHubCard