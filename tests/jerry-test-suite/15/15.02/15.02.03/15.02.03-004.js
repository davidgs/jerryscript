// Copyright 2014 Samsung Electronics Co., Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var object = {
  prop1: Number,
  prop2: String,
  prop3: true,
  prop4: 0
}

var keys = Object.keys(object);

assert(keys[0] == "prop1" &&
        keys[1] == "prop2" &&
        keys[2] == "prop3" &&
        keys[3] == "prop4");
       