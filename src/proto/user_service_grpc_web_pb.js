/**
 * @fileoverview gRPC-Web generated client stub for services
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.16.3
// source: src/proto/user_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var src_proto_company_pb = require('../../src/proto/company_pb.js')
const proto = {};
proto.services = require('./user_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.UserServiceClient =
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
proto.services.UserServicePromiseClient =
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
 *   !proto.services.SignupRequest,
 *   !proto.services.SignupResponse>}
 */
const methodDescriptor_UserService_Signup = new grpc.web.MethodDescriptor(
  '/services.UserService/Signup',
  grpc.web.MethodType.UNARY,
  proto.services.SignupRequest,
  proto.services.SignupResponse,
  /**
   * @param {!proto.services.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.SignupResponse.deserializeBinary
);


/**
 * @param {!proto.services.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.SignupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.SignupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.UserServiceClient.prototype.signup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.UserService/Signup',
      request,
      metadata || {},
      methodDescriptor_UserService_Signup,
      callback);
};


/**
 * @param {!proto.services.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.SignupResponse>}
 *     Promise that resolves to the response
 */
proto.services.UserServicePromiseClient.prototype.signup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.UserService/Signup',
      request,
      metadata || {},
      methodDescriptor_UserService_Signup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.GetAllProjectsRequest,
 *   !proto.services.GetAllProjectsResponse>}
 */
const methodDescriptor_UserService_GetAllProjects = new grpc.web.MethodDescriptor(
  '/services.UserService/GetAllProjects',
  grpc.web.MethodType.UNARY,
  proto.services.GetAllProjectsRequest,
  proto.services.GetAllProjectsResponse,
  /**
   * @param {!proto.services.GetAllProjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.GetAllProjectsResponse.deserializeBinary
);


/**
 * @param {!proto.services.GetAllProjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.GetAllProjectsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.GetAllProjectsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.UserServiceClient.prototype.getAllProjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.UserService/GetAllProjects',
      request,
      metadata || {},
      methodDescriptor_UserService_GetAllProjects,
      callback);
};


/**
 * @param {!proto.services.GetAllProjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.GetAllProjectsResponse>}
 *     Promise that resolves to the response
 */
proto.services.UserServicePromiseClient.prototype.getAllProjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.UserService/GetAllProjects',
      request,
      metadata || {},
      methodDescriptor_UserService_GetAllProjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.CreateProjectRequest,
 *   !proto.services.CreateProjectResponse>}
 */
const methodDescriptor_UserService_CreateProject = new grpc.web.MethodDescriptor(
  '/services.UserService/CreateProject',
  grpc.web.MethodType.UNARY,
  proto.services.CreateProjectRequest,
  proto.services.CreateProjectResponse,
  /**
   * @param {!proto.services.CreateProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.CreateProjectResponse.deserializeBinary
);


/**
 * @param {!proto.services.CreateProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.CreateProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.CreateProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.UserServiceClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.UserService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateProject,
      callback);
};


/**
 * @param {!proto.services.CreateProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.CreateProjectResponse>}
 *     Promise that resolves to the response
 */
proto.services.UserServicePromiseClient.prototype.createProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.UserService/CreateProject',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateProject);
};


module.exports = proto.services;

