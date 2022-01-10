'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var socket_ioClient = require('socket.io-client');
require('@ethersproject/providers');

/**
 * @package OpenMevSocket
 * @version 0.2.0
 * @see docs.openmev.org
 */
// import { defaultAbiCoder } from '@ethersproject/abi';

/**
 * @configure JSON_RPC_URL is default
 * @configure RPC_URL for failover
 */

var defaultServerUrl = 'https://api.sushirelay.com/v1';
var RPC_URL = process.env.RPC_URL;
var tokenKey = "SESSION_TOKEN";
var Event;

(function (Event) {
  Event["FEES_CHANGE"] = "FEES_CHANGE";
  Event["SOCKET_SESSION"] = "SOCKET_SESSION";
  Event["SOCKET_ERR"] = "SOCKET_ERR";
  Event["BUNDLE_REQUEST"] = "BUNDLE_REQUEST";
  Event["OPENMEV_BUNDLE_REQUEST"] = "OPENMEV_BUNDLE_REQUEST";
  Event["BUNDLE_STATUS_REQUEST"] = "BUNDLE_STATUS_REQUEST";
  Event["BUNDLE_RESPONSE"] = "BUNDLE_RESPONSE";
  Event["BUNDLE_CANCEL_REQUEST"] = "BUNDLE_CANCEL_REQUEST";
})(Event || (Event = {}));

var Status;

(function (Status) {
  Status["PENDING_BUNDLE"] = "PENDING_BUNDLE";
  Status["FAILED_BUNDLE"] = "FAILED_BUNDLE";
  Status["SUCCESSFUL_BUNDLE"] = "SUCCESSFUL_BUNDLE";
  Status["REPLACE_BUNDLE_SUCCESSFUL"] = "REPLACE_BUNDLE_SUCCESSFUL";
  Status["BUNDLE_NOT_FOUND"] = "BUNDLE_NOT_FOUND";
})(Status || (Status = {}));
var Debug;

(function (Debug) {
  Debug["BLOCKTYPE_FLASHBOTS"] = "BLOCKTYPE_FLASHBOTS";
  Debug["BLOCKTYPE_EDENNETWORK"] = "BLOCKTYPE_EDENNETWORK";
  Debug["BUNDLE_OUTBID"] = "BUNDLE_OUTBID";
  Debug["ERROR_BLOCKHEAD"] = "ERROR_BLOCKHEAD";
  Debug["ERROR_BLOCKDATA"] = "ERROR_BLOCKDATA";
  Debug["ERROR_UNKNOWN"] = "ERROR_UNKNOWN";
})(Debug || (Debug = {}));

var OpenMEVSocket = /*#__PURE__*/function () {
  function OpenMEVSocket(serverUrl) {
    if (serverUrl === void 0) {
      serverUrl = defaultServerUrl;
    }

    var token = localStorage.getItem(tokenKey);
    var socket = socket_ioClient.io(serverUrl, {
      transports: ['websocket'],
      auth: {
        token: token
      },
      reconnection: true,
      reconnectionDelay: 5000,
      autoConnect: true
    });
    this.socket = socket;
  }

  var _proto = OpenMEVSocket.prototype;

  _proto.disconnect = function disconnect() {
    this.socket.off('connect');
    this.socket.off('connect_error');
    this.socket.off(Event.SOCKET_ERR);
    this.socket.off(Event.SOCKET_SESSION);
    this.socket.off(Event.FEES_CHANGE);
    this.socket.off(Event.BUNDLE_RESPONSE);
  };

  _proto.closeConnection = function closeConnection() {
    this.socket.disconnect();
  };

  _proto.init = function init(_ref) {
    var _this = this;

    var onConnect = _ref.onConnect,
        onConnectError = _ref.onConnectError,
        onDisconnect = _ref.onDisconnect,
        onError = _ref.onError,
        onFeesChange = _ref.onFeesChange,
        onSocketSession = _ref.onSocketSession,
        onTransactionResponse = _ref.onTransactionResponse;

    /**
     *
     * @event onConnect
     *
     */
    this.socket.on('connect', function () {
      if (onConnect) onConnect();
    });
    /**
     *
     * @event onConnectError
     *
     */

    this.socket.on('connect_error', function (err) {
      if (onConnectError) onConnectError(err);
    });
    /**
     * @event onDisconnect
     */

    this.socket.on('disconnect', function (err) {
      if (onDisconnect) onDisconnect(err);
    });
    /**
     * @event onError
     */

    this.socket.on(Event.SOCKET_ERR, function (err) {
      if (onError) onError(err);
    });
    /**
     * @event onSocketSession
     * @note Stores the session token in the browser local storage
     */

    this.socket.on(Event.SOCKET_SESSION, function (session) {
      localStorage.setItem(tokenKey, session.token);
      if (onSocketSession) onSocketSession(session);
    });
    /**
     * @event onFeesChange
     */

    this.socket.on(Event.FEES_CHANGE, function (response) {
      if (onFeesChange) onFeesChange(response);
    });
    /**
     * @event onTransactionResponse
     */

    this.socket.on(Event.BUNDLE_RESPONSE, function (response) {
      if (onTransactionResponse) onTransactionResponse(response);
    });
    /**
     * @dev Returns function used to stop listening to all connected socket events.
     */

    return function () {
      _this.disconnect();
    };
  };

  _proto.emitBundleRequest = function emitBundleRequest(bundle) {
    this.socket.emit(Event.BUNDLE_REQUEST, bundle);
  };

  _proto.emitTransactionRequest = function emitTransactionRequest(bundle) {
    this.socket.emit(Event.OPENMEV_BUNDLE_REQUEST, bundle);
  };

  _proto.emitStatusRequest = function emitStatusRequest(id) {
    this.socket.emit(Event.BUNDLE_STATUS_REQUEST, {
      id: id
    });
  };

  _proto.emitTransactionCancellation = function emitTransactionCancellation(id) {
    this.socket.emit(Event.BUNDLE_CANCEL_REQUEST, {
      id: id
    });
  };

  return OpenMEVSocket;
}();
/*
export async function tryGetRevertReason(to: string, from: string, data: string): Promise<string | undefined> {
  const provider = getDefaultProvider();
  const tx = { to, from, data };
  try {
    await provider.estimateGas(tx);
  } catch {
    const value = await provider.call(tx);
    return hexDataLength(value) % 32 === 4 && hexDataSlice(value, 0, 4) === '0x08c379a0'
      ? defaultAbiCoder.decode(['string'], hexDataSlice(value, 4))
      : undefined;
  }
  return undefined;
}
*/

/** @exports connector */

/**
 * @package OpenMEV/SDK-Connector
 * @version 0.2.0
 * @license Apache-2.0
 * @export connector
 * @since v0.3.0
 */
 //export * from './connector';

exports.default = OpenMEVSocket;
//# sourceMappingURL=sdk-connect.cjs.development.js.map
