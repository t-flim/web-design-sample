

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="footer">
            &copy; { currentYear } | company name
        </footer>
    )
}

export default Footer