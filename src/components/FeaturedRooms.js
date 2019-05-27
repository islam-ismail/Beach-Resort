import React, { Component } from "react";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";
import { RoomContext } from "../Context";

//if we have Class Component and we want to use Context it's better to use 'static' way
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
