import {Accordion} from 'react-bootstrap'


const Accordio = ({
  title,
  discriptino,
}: {
  title: string;
  discriptino: string;
}) => {

  return (
    <Accordion.Item className="bg-none" eventKey="0">
      <Accordion.Header>
        <p className="flex justify-between w-full items-center">{title}</p>
      </Accordion.Header>
      <Accordion.Body>{discriptino}</Accordion.Body>
    </Accordion.Item>
  );
};
export default Accordio;
