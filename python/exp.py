import threading
import time
# lock=threading.Lock()
#
# def task1():
#     lock.acquire()
#     print("task1")
#     time.sleep(5)
#     print("task1 completed ")
#     lock.release()
#
#
# def task2():
#     lock.acquire()
#     print("task2")
#     time.sleep(2)
#     print("task2 completed ")
#     lock.release()
#
#
# t1= threading.Thread(target=task1)
# t2= threading.Thread(target=task2)
#
#
#
# t1.start()
# t2.start()
# # print("all completed")
#
# t2.join()
# t1.join()

def tsk1():
    print("task1")
    time.sleep(5)
    print("task1 completed ")



def tsk2():
    print("task2")
    time.sleep(2)
    print("task2 completed ")



t1= threading.Thread(target=tsk1)
t2= threading.Thread(target=tsk2)



t1.start()
t2.start()

t2.join()
t1.join()