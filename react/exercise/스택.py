import sys
input = sys.stdin.readline

n = int(input())
stack = []
while n>0:
    cmd = input().rstrip()
    if " " in cmd :
        cmd,number = cmd.split()
    if cmd == 'push':
        stack.append(int(number))
    elif cmd == 'top':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])
    elif cmd == 'pop':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())
    elif cmd == 'size':
        print(len(stack))
    else:
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    n-=1
    