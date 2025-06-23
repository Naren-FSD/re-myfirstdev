function Paragraph(props){
  console.log(props);
  
  return<p>The current time is {props.time}<br /><br /><br />{props.x}</p>
  
}
export default Paragraph;