import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Loading() {
    return (
        <>
            <div className="container align-center">
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Loading...</span>
                </Button>{' '}
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
            <div className="container row">
                <div className="grid">
                    <Skeleton height={600} />
                    <Skeleton height={600} />
                    <Skeleton height={600} />
                </div>
            </div>
        </>
    );
}

export default Loading;