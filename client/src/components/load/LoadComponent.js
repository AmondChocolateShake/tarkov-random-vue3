import styled from "styled-components";

export default function LoadComponent() {
  const LoadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    height: inherit;
    background-color: rgba(30, 30, 30, 1);
    border-radius: 5px;
  `;
  const LoadTopSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    background-color: rgba(30, 30, 30, 1);
    border-radius: 5px;
  `;
  const LoadTopDivSty = styled.div`
    width: 90%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
  `;

  const LoadBottomSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 5px;
  `;
  const LoadBottomDivSty = styled.div`
    margin-top: 10px;
    width: 95%;
    height: 20%;
    background-color: rgba(30, 30, 30, 1);
    border-radius: 5px;
  `;

  return (
    <LoadContainer>
      <LoadTopSty>
        <LoadTopDivSty />
      </LoadTopSty>
      <LoadBottomSty>
        <LoadBottomDivSty />
        <LoadBottomDivSty />
        <LoadBottomDivSty />
        <LoadBottomDivSty />
        <LoadBottomDivSty style={{ marginBottom: "10px" }} />
      </LoadBottomSty>
    </LoadContainer>
  );
}
