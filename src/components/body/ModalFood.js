import { Button, Modal } from "react-bootstrap";

function ModalFood(props) {
    if (!props.dish) { return (<></>); }
    return (
        <>
            <Modal show={props.modalToggle} onHide={props.modalHandler}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">{props.dish.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.dishDetail}</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={props.modalHandler}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalFood;