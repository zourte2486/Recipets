export default function Jokes(props) {
    console.log(props)
    return (
        <>
          <h3> Setup : {props.Setup} </h3>
          <h3> Punchline : {props.Punchline} </h3>
        </>
    )
}