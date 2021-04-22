
import asyncio
import websockets

async def echo(websocket, path):
    while True:
        msg = await websocket.recv()
        print("Message received!")
        await websocket.send(msg)

ws = websockets.serve(echo, "localhost", 8765)
asyncio.get_event_loop().run_until_complete(ws)
asyncio.get_event_loop().run_forever()

