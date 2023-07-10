interface Props {
    btnName: string,
    design: string,
    testid: string,
    click(): void
  }
const Button = ({ btnName, design, click, testid } : Props) => {
    return (
        <div>
            <button className={design} onClick={click} data-testid={testid}>{btnName}</button>
        </div>
    )
}

export default Button;