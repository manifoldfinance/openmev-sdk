#!/bin/bash
proto2graphql --input packages/protobufs/src/eth.proto > eth.graphql
proto2graphql --input packages/protobufs/src/sushi.proto > sushi.graphql
proto2graphql --input packages/protobufs/src/gas.proto > gas.graphql
proto2graphql --input packages/protobufs/src/rpc.proto > rpc.graphql
proto2graphql --input packages/protobufs/src/kdb_type_specifier.proto > kdb.graphql
