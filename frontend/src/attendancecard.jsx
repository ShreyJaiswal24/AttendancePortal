import { Container, Paper } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PieChart,Pie,Cell } from 'recharts';
import ListGroup from 'react-bootstrap/ListGroup';
import RectangleIcon from '@mui/icons-material/Rectangle';

// const data = {
//     name: 'Shrey Jaiswal',
//     ma203 : {
//         p:37,
//         t:44,
//     },
//     ee101 : {
//         p:42,
//         t:44,
//     },
//     eo102: {
//         p:13,
//         t:44,
//     },
//     mo201: {
//         p:25,
//         t:44,
//     },
//     me105: {
//         p:6,
//         t:6,
//     },
//     h106: {
//         p:24,
//         t:26,
//     },
// }




function AttendanceCard({subject,p,t}) {
  const COLORS = ['#95EF10', 'red'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.45;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${((percent * 100)*(t/100)).toFixed(0)}`}
    </text>
  );
};
    const data2 = [
        { name: 'p', value: p },
        { name: 'a', value: t-p },
      ];
    const percent = Math.floor((p*100/t))
    const reqdclasses = Math.ceil((75/100)*t - p)
  return (   //Bootstrap React mai classname daalke bootstrap classes ka bhi use kar sakte
    <Container className='col-6 offset-3' style={{marginTop:'10vh'}}>
    <Paper elevation={6}>
    <Card>
      <Card.Header as="h5">{subject}</Card.Header>
      <Card.Body>
        <Card.Title>Your Attendance Percentage as of now :</Card.Title>
        <Card.Text>
            {percent>74?<ProgressBar striped variant="success" now={percent} label={`${percent}%`}/>:<ProgressBar striped variant="danger" now={percent} label={`${percent}%`}/>}
        </Card.Text>
        <Card.Text>
        <Container style={{display:'flex',marginLeft:0,paddingLeft:0}}>
        <Container style={{width:200,margin:0,padding:0}}>    
            <PieChart width={200} height={200}>
                <Pie data={data2} dataKey="value" outerRadius={70} fill="#95EF10" labelLine={false} label={renderCustomizedLabel}>
                    {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}</Pie>
            </PieChart>
        </Container>
        <Container style={{display:'flex',width:400,margin:0,padding:0}}>
            <ListGroup style={{paddingTop:50}}>
                <ListGroup.Item><RectangleIcon sx={{ color:'red'}}></RectangleIcon> - Red indicates missed classes</ListGroup.Item>
                <ListGroup.Item><RectangleIcon sx={{ color:'rgb(149, 239, 16)'}}></RectangleIcon> - Green indicates attended classes</ListGroup.Item>
            </ListGroup>
        </Container>
        <Container style={percent>74?{width:400,paddingTop:46}:{width:400,paddingTop:32}}>
        <Card>
      <Card.Body>
        <Card.Title style={percent>74?{color:'rgb(149, 239, 16)'}:{color:'red'}}>{percent>74?"Congrats!":"Oh No!"}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{paddingTop:4}}>{percent>74?"You're good to go!":`You're behind the compulsory limit by ${reqdclasses} classes`}</Card.Subtitle>
      </Card.Body>
        </Card>
        </Container>
    </Container>
        </Card.Text>
      </Card.Body>
    </Card>
    </Paper>
    </Container>
  );
}

export default AttendanceCard;