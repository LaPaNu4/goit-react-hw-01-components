import styled from '@emotion/styled';

export const FriendDiv = styled.div`
width: 400px;
background-color: #ccc;
display: flex;
align-items: center;
justify-content: center;
background: #fff;
padding: 10px 0px;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export const Item = styled.li`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.10);
  border-radius: 1px;
`;

export const Span = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${props => (props.isOnline ? '#24f101' : 'red')};
`;
export const Name = styled.p`

`
export const Avatar = styled.img`
src: ${(props)=>props.Avatar};
 alt:"User avatar" ;
 width:48px;
`;