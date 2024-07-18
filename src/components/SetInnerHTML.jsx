export default function (props){
    return(<span dangerouslySetInnerHTML={{ __html: props.data }} ></span>)
}
