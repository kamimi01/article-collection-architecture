import ajv = require('ajv');
import { OpenAPIV3, ValidateResponseOpts } from '../../framework/types';
export declare class SchemaPreprocessor {
    private ajv;
    private apiDoc;
    private apiDocRes;
    private responseOpts;
    constructor(apiDoc: OpenAPIV3.Document, ajvOptions: ajv.Options, validateResponsesOpts: ValidateResponseOpts);
    preProcess(): {
        apiDoc: OpenAPIV3.Document;
        apiDocRes: OpenAPIV3.Document;
    };
    private gatherComponentSchemaNodes;
    private gatherSchemaNodesFromPaths;
    /**
     * Traverse the schema starting at each node in nodes
     * @param nodes the nodes to traverse
     * @param visit a function to invoke per node
     */
    private traverseSchemas;
    private schemaVisitor;
    private processDiscriminator;
    private handleSerDes;
    private handleReadonly;
    /**
     * extract all requestBodies' schemas from an operation
     * @param op
     */
    private extractRequestBodySchemaNodes;
    private extractResponseSchemaNodes;
    private resolveSchema;
    /**
     * add path level parameters to the schema's parameters list
     * @param pathItemKey
     * @param pathItem
     */
    private preprocessPathLevelParameters;
    private findKeys;
    getKeyFromRef(ref: any): any;
}
