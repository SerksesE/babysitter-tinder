import React, { Component } from 'react';
import { Parents } from './Parents';

export class ParentsContainer extends Component {

    state = {
        parents: [
            {
                id: 1,
                userName: 'baby1',
                userPassword: '123456',
                agePrefer: 2,
                numberOfChildren: 1,
                feeRequired: 12,
                experienceInYears: 2,
                locationAms: true
            }, {
                id: 2,
                userName: 'baby2',
                userPassword: '123456',
                agePrefer: 1,
                numberOfChildren: 2,
                feeRequired: 6,
                experienceInYears: 3,
                locationAms: true
            }, {
                is: 3,
                userName: 'baby3',
                userPassword: '123456',
                agePrefer: 3,
                numberOfChildren: 3,
                feeRequired: 12,
                experienceInYears: 5,
                locationAms: false
            }, {
                id: 4,
                userName: 'baby4',
                userPassword: '123456',
                agePrefer: 4,
                numberOfChildren: 4,
                feeRequired: 8,
                experienceInYears: 8,
                locationAms: true
            }, {
                id: 5,
                userName: 'baby5',
                userPassword: '123456',
                agePrefer: 12,
                numberOfChildren: 2,
                feeRequired: 15,
                experienceInYears: 3,
                locationAms: true
            }, {
                id: 6,
                userName: 'baby6',
                userPassword: '123456',
                agePrefer: 7,
                numberOfChildren: 1,
                feeRequired: 10,
                experienceInYears: 1,
                locationAms: true
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
