function Profile(props) {
  console.log(props)
  
  return (
    <>
      <h1>사용자 프로필(조회수: {props.count})</h1>
      <h2>이름: {props.name}</h2>
      <h2>자기소개: {props.introduction}</h2>
    </>
  );

}

export default Profile