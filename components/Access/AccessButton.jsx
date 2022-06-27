import Button from '@mui/material/Button';
import Link from 'next/link';

function AccessButton(props) {
    return (
        <>
            <Link href={props.to}>
                <a style={{ textDecoration: 'none' }} >
                    <Button variant='outlined' sx={{
                        width: {
                            md: '352px',
                            xs: '200px'
                        }, height: {
                            md: "86px",
                            xs: '60px'
                        }, borderRadius: '50px', fontSize: {
                            md: '26px',
                            xs: '16px'
                        }, color: '#34EFFE', fontFamily: 'AvenirNextUltraLight', fontWeight: 600, borderColor: '#34EFFE', textTransform: 'capitalize', "&:hover": {
                            borderColor: '#34EFFE'
                        }
                    }} >
                        {props.text}
                    </Button>
                </a>
            </Link>
        </>
    )
}

export default AccessButton;