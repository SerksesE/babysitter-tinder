import * as React from 'react';

export default function LoginUser(props) {
    console.log(props.parents)
    return (
        <div>
            <h1>Parents Info</h1>
            <ul>
                {props.parents.map(parent =>
                    <p key={parent.id}>
                        userName={parent.userName}
                        ageOfChildren={parent.ageOfChildren}
                        expYears={parent.experienceInYears}
                        fee={parent.feeInEuros}
                        location={parent.locationAms}
                    </p>)
                }              
            </ul>
        </div>
    )
}


