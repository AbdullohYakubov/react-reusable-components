import Button from "../Button/Button"

function Main() {
    return (
        <main className="main">
            <Button text="Next"></Button>
            <Button text="Next" variant="secondary"></Button>
            <Button text="Next" variant="primary" isOutlined={true}></Button>
            <Button text="Next" variant="secondary" isOutlined={true}></Button>
            <Button text="Next" variant="primary" isOutlined={true} hasIcon={true}></Button>
        </main>
    )
}

export default Main