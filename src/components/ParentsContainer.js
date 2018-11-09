import React, { Component } from 'react';
import { Parents } from './Parents';

export class ParentsContainer extends Component {

    state = {
        parents: [
            {
                id: 1,
                userName: 'Tanja',
                userPassword: '123456',
                ageOfChildren: 2,
                numberOfChildren: 1,
                feeInEuros: 12,
                experienceInYears: 2,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 2 years old' 
            }, {
                id: 2,
                userName: 'Anna',
                userPassword: '123456',
                ageOfChildren: 1,
                numberOfChildren: 2,
                feeInEuros: 6,
                experienceInYears: 3,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 1 years old' 
            }, {
                id: 3,
                userName: 'Jenny',
                userPassword: '123456',
                ageOfChildren: 3,
                numberOfChildren: 3,
                feeInEuros: 12,
                experienceInYears: 5,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 3 years old'
            }, {
                id: 4,
                userName: 'De Jong',
                userPassword: '123456',
                ageOfChildren: 4,
                numberOfChildren: 4,
                feeInEuros: 8,
                experienceInYears: 8,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 4 years old' 
            }, {
                id: 5,
                userName: 'Jane',
                userPassword: '123456',
                ageOfChildren: 3,
                numberOfChildren: 2,
                feeInEuros: 15,
                experienceInYears: 3,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 3 years old'
            }, {
                id: 6,
                userName: 'Joop',
                userPassword: '123456',
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 11,
                experienceInYears: 1,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 7 years old'
            }, {
                id: 7,
                userName: 'Holla',
                userPassword: '123456',
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 14,
                experienceInYears: 1,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 7 years old' 
            }, {
                id: 8,
                userName: 'Edo',
                userPassword: '123456',
                ageOfChildren: 2,
                numberOfChildren: 1,
                feeInEuros: 10,
                experienceInYears: 1,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 2 years old' 
            }, {
                id: 9,
                userName: 'Peter',
                userPassword: '123456',
                ageOfChildren: 1,
                numberOfChildren: 1,
                feeInEuros: 12,
                experienceInYears: 1,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 1 years old' 
            }, {
                id: 10,
                userName: 'Mario',
                userPassword: '123456',
                ageOfChildren: 5,
                numberOfChildren: 1,
                feeInEuros: 15,
                experienceInYears: 1,
                locationAms: 'yes',
                description: 'Hi! I am living in Amsterdam and I want to find a babysitter to takecare my lovely angel. She is 5 years old'
            }
        ]
    }

    renderParents = (parents) => {
        return (
            <Parents
                key={parents.id}
                userName={parents.userName}
                ageOfChildren={parents.ageOfChildren}
                expYears={parents.experienceInYears}
                fee={parents.feeInEuros}
                location={parents.locationAms}
                description={parents.description}
            />
        )
    }

    render() {
        const i = Math.floor(Math.random() * this.state.parents.length)
        return (
            <div className="parentsContainer">
                {this.state.parents
                    .filter(arr => { return arr.id === i })
                    .map(this.renderParents)
                }

            </div>
        );
    }
}

// {this.state.parents.map(this.renderParents)}