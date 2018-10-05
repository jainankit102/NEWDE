export interface AALApplication {
    name: string;
    listOfObjects: AALObject[];
}

export interface AALObject {
    name: string;
    id: string;
    relationShip?: ObjectRelationship[];
    businessRule?: BusinessRule;
    layoutRule?: Array<object>;
    process?: Array<object>;
}

export interface ObjectRelationship {
    targetID: string;
    sourceID: string;
    type: RelationShipType;
}

export enum RelationShipType {
    ManyToMany,
    OneToMany
}

export interface BusinessRule {
    onCreate: object[];
    onUpdate: object[];
    onDelete: object[];
}

export interface ViewElementProperty {
    type: string;
    value: object;
    size?: object;
}
