import React, { Component } from 'react';
import { Parents } from './Parents';

export class ParentsContainer extends Component {

    state = {
        parents: [
            {
                id: 1,
                ageOfChildren: 2,
                numberOfChildren: 1,
                feeInEuros: 12,
                experienceInYears: 2,
                location: 1
            }, {
                id: 2,
                ageOfChildren: 1,
                numberOfChildren: 2,
                feeInEuros: 6,
                experienceInYears: 3,
                location: 1
            }, {
                is: 3,
                ageOfChildren: 3,
                numberOfChildren: 3,
                feeInEuros: 12,
                experienceInYears: 5,
                location: 1
            }, {
                id: 4,
                ageOfChildren: 4,
                numberOfChildren: 4,
                feeInEuros: 8,
                experienceInYears: 8,
                location: 1
            }, {
                id: 5,
                ageOfChildren: 12,
                numberOfChildren: 2,
                feeInEuros: 15,
                experienceInYears: 3,
                location: 1
            }, {
                id: 6,
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 10,
                experienceInYears: 1,
                location: 1
            }
        ]
    }

    renderParents = (parents) => {
        return (
            <Parents
                key={parents.id}
                ageOfChildren={parents.ageOfChildren}
                expYears={parents.experienceInYears}
                fee={parents.feeInEuros}
                location={parents.location}
            />
        )
    }


    render() {
        return (
            <div className="parentsContainer">
                <ul>
                    {this.state.parents.map(this.renderParents)}
                </ul>
            </div>
        );
    }
}
