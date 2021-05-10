export default function Post({item, searchPostDetail}) {
    return (
        <div>
            {item.id} -
            {item.title};
            <button onClick={() => searchPostDetail(item.id)}>Details</button>
            {/*{item.userId} -*/}
            {/*{item.body};*/}
        </div>
    );
}