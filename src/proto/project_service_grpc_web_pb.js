/**
 * @fileoverview gRPC-Web generated client stub for services
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.16.3
// source: src/proto/project_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var src_proto_company_pb = require('../../src/proto/company_pb.js')
const proto = {};
proto.services = require('./project_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.ProjectServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.ProjectServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.GetAllCompaniesRequest,
 *   !proto.services.GetAllCompaniesResponse>}
 */
const methodDescriptor_ProjectService_GetAllCompanies = new grpc.web.MethodDescriptor(
  '/services.ProjectService/GetAllCompanies',
  grpc.web.MethodType.UNARY,
  proto.services.GetAllCompaniesRequest,
  proto.services.GetAllCompaniesResponse,
  /**
   * @param {!proto.services.GetAllCompaniesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.GetAllCompaniesResponse.deserializeBinary
);


/**
 * @param {!proto.services.GetAllCompaniesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.GetAllCompaniesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.GetAllCompaniesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ProjectServiceClient.prototype.getAllCompanies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ProjectService/GetAllCompanies',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GetAllCompanies,
      callback);
};


/**
 * @param {!proto.services.GetAllCompaniesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.GetAllCompaniesResponse>}
 *     Promise that resolves to the response
 */
proto.services.ProjectServicePromiseClient.prototype.getAllCompanies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ProjectService/GetAllCompanies',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GetAllCompanies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.AddCompanyToProjectRequest,
 *   !proto.services.AddCompanyToProjectResponse>}
 */
const methodDescriptor_ProjectService_AddCompanyToProject = new grpc.web.MethodDescriptor(
  '/services.ProjectService/AddCompanyToProject',
  grpc.web.MethodType.UNARY,
  proto.services.AddCompanyToProjectRequest,
  proto.services.AddCompanyToProjectResponse,
  /**
   * @param {!proto.services.AddCompanyToProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.AddCompanyToProjectResponse.deserializeBinary
);


/**
 * @param {!proto.services.AddCompanyToProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.AddCompanyToProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.AddCompanyToProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ProjectServiceClient.prototype.addCompanyToProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ProjectService/AddCompanyToProject',
      request,
      metadata || {},
      methodDescriptor_ProjectService_AddCompanyToProject,
      callback);
};


/**
 * @param {!proto.services.AddCompanyToProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.AddCompanyToProjectResponse>}
 *     Promise that resolves to the response
 */
proto.services.ProjectServicePromiseClient.prototype.addCompanyToProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ProjectService/AddCompanyToProject',
      request,
      metadata || {},
      methodDescriptor_ProjectService_AddCompanyToProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.GetAllCompaniesInProjectRequest,
 *   !proto.services.GetAllCompaniesInProjectResponse>}
 */
const methodDescriptor_ProjectService_GetAllCompaniesInProject = new grpc.web.MethodDescriptor(
  '/services.ProjectService/GetAllCompaniesInProject',
  grpc.web.MethodType.UNARY,
  proto.services.GetAllCompaniesInProjectRequest,
  proto.services.GetAllCompaniesInProjectResponse,
  /**
   * @param {!proto.services.GetAllCompaniesInProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.GetAllCompaniesInProjectResponse.deserializeBinary
);


/**
 * @param {!proto.services.GetAllCompaniesInProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.GetAllCompaniesInProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.GetAllCompaniesInProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ProjectServiceClient.prototype.getAllCompaniesInProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ProjectService/GetAllCompaniesInProject',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GetAllCompaniesInProject,
      callback);
};


/**
 * @param {!proto.services.GetAllCompaniesInProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.GetAllCompaniesInProjectResponse>}
 *     Promise that resolves to the response
 */
proto.services.ProjectServicePromiseClient.prototype.getAllCompaniesInProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ProjectService/GetAllCompaniesInProject',
      request,
      metadata || {},
      methodDescriptor_ProjectService_GetAllCompaniesInProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.CreateObjectRequest,
 *   !proto.services.CreateObjectResponse>}
 */
const methodDescriptor_ProjectService_CreateObjectInProject = new grpc.web.MethodDescriptor(
  '/services.ProjectService/CreateObjectInProject',
  grpc.web.MethodType.UNARY,
  proto.services.CreateObjectRequest,
  proto.services.CreateObjectResponse,
  /**
   * @param {!proto.services.CreateObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.CreateObjectResponse.deserializeBinary
);


/**
 * @param {!proto.services.CreateObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.CreateObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.CreateObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ProjectServiceClient.prototype.createObjectInProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ProjectService/CreateObjectInProject',
      request,
      metadata || {},
      methodDescriptor_ProjectService_CreateObjectInProject,
      callback);
};


/**
 * @param {!proto.services.CreateObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.CreateObjectResponse>}
 *     Promise that resolves to the response
 */
proto.services.ProjectServicePromiseClient.prototype.createObjectInProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ProjectService/CreateObjectInProject',
      request,
      metadata || {},
      methodDescriptor_ProjectService_CreateObjectInProject);
};


module.exports = proto.services;

