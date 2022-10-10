export enum NodeType {
    module = 'module',
    moduleWithRoute = 'moduleWithRoute',
    component ='component',
    service = 'service',
    pipe = 'pipe',
    directive = 'directive'
}

export class NodeConfiguration {
    name: string = 'oguzhan18-';
    type: NodeType = NodeType.module;
    isRoot: boolean = false;
    route: string = '';
    modulePath: string = '';
    parentModule: string = '';
    children: Array<NodeConfiguration> = [];
}
